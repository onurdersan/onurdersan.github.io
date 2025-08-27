import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  DEFAULT_THEMES,
  DEFAULT_PROFILE,
  DEFAULT_CONFIG,
  SKELETON_STYLES,
} from '../constants';
import { getInitialTheme, getSanitizedConfig, skeleton } from '../utils';
import {
  SanitizedConfig,
  SanitizedExternalProject,
} from '../interfaces/sanitized-config';
import { Profile } from '../interfaces/profile';
import AvatarCard from './avatar-card';
import DetailsCard from './details-card';
import SkillCard from './skill-card';
import ExperienceCard from './experience-card';
import EducationCard from './education-card';
import PublicationCard from './publication-card';
import CertificationCard from './certification-card';
import ExternalProjectCard from './external-project-card';
import BlogCard from './blog-card';
import GithubProjectCard from './github-project-card';
import Footer from './footer';
import ErrorPage from './error-page';
import ThemeChanger from './theme-changer';
import colors from '../data/colors.json';
import Modal from './modal'; // Oluşturduğumuz Modal bileşenini import ediyoruz

type Props = {
  config: Record<string, any>;
  profile: Profile | null;
  loading: boolean;
  error: any;
};

const GitProfile = ({ config, profile, loading, error }: Props) => {
  const [sanitizedConfig] = useState<SanitizedConfig>(
    getSanitizedConfig(config),
  );
  const [theme, setTheme] = useState<string>(getInitialTheme());
  const [_, setAvatar] = useState<string | null>(null);
  const [githubProjects, setGithubProjects] = useState<any[]>([]);
  const [githubProjectsLoading, setGithubProjectsLoading] =
    useState<boolean>(false);
  const [mediumArticles, setMediumArticles] = useState<any[]>([]);
  const [mediumArticlesLoading, setMediumArticlesLoading] =
    useState<boolean>(false);
  const [devToArticles, setDevToArticles] = useState<any[]>([]);
  const [devToArticlesLoading, setDevToArticlesLoading] =
    useState<boolean>(false);

  // Modal'ı kontrol etmek için state ekliyoruz
  const [selectedProject, setSelectedProject] =
    useState<SanitizedExternalProject | null>(null);

  // Proje kartına tıklandığında çalışacak fonksiyon
  const handleProjectClick = (project: SanitizedExternalProject) => {
    setSelectedProject(project);
  };

  // Modal'ı kapatacak fonksiyon
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const fontStyle = useMemo(() => {
    return sanitizedConfig.font
      ? {
          fontFamily: sanitizedConfig.font,
        }
      : {};
  }, [sanitizedConfig.font]);

  const fetchGithubProjects = useCallback(async () => {
    if (
      !sanitizedConfig.projects.github.username ||
      sanitizedConfig.projects.github.mode === 'disabled'
    ) {
      return;
    }

    setGithubProjectsLoading(true);

    try {
      const res = await fetch(
        `https://api.github.com/users/${sanitizedConfig.projects.github.username}/repos?sort=${sanitizedConfig.projects.github.sortBy}&direction=${sanitizedConfig.projects.github.orderBy}&per_page=${sanitizedConfig.projects.github.limit}`,
      );
      const json = await res.json();

      if (res.status !== 200) {
        return;
      }

      setGithubProjects(json);
    } catch (error) {
      //
    } finally {
      setGithubProjectsLoading(false);
    }
  }, [
    sanitizedConfig.projects.github.username,
    sanitizedConfig.projects.github.sortBy,
    sanitizedConfig.projects.github.orderBy,
    sanitizedConfig.projects.github.limit,
    sanitizedConfig.projects.github.mode,
  ]);

  const fetchMediumArticles = useCallback(async () => {
    if (
      !sanitizedConfig.blog.medium.username ||
      sanitizedConfig.blog.medium.mode === 'disabled'
    ) {
      return;
    }

    setMediumArticlesLoading(true);

    try {
      const res = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${sanitizedConfig.blog.medium.username}`,
      );
      const json = await res.json();

      if (res.status !== 200) {
        return;
      }

      setMediumArticles(
        json.items.slice(0, sanitizedConfig.blog.medium.limit),
      );
    } catch (error) {
      //
    } finally {
      setMediumArticlesLoading(false);
    }
  }, [
    sanitizedConfig.blog.medium.username,
    sanitizedConfig.blog.medium.limit,
    sanitizedConfig.blog.medium.mode,
  ]);

  const fetchDevToArticles = useCallback(async () => {
    if (
      !sanitizedConfig.blog.dev.username ||
      sanitizedConfig.blog.dev.mode === 'disabled'
    ) {
      return;
    }

    setDevToArticlesLoading(true);

    try {
      const res = await fetch(
        `https://dev.to/api/articles?username=${sanitizedConfig.blog.dev.username}`,
      );
      const json = await res.json();

      if (res.status !== 200) {
        return;
      }

      setDevToArticles(json.slice(0, sanitizedConfig.blog.dev.limit));
    } catch (error) {
      //
    } finally {
      setDevToArticlesLoading(false);
    }
  }, [
    sanitizedConfig.blog.dev.username,
    sanitizedConfig.blog.dev.limit,
    sanitizedConfig.blog.dev.mode,
  ]);

  useEffect(() => {
    fetchGithubProjects();
    fetchMediumArticles();
    fetchDevToArticles();
  }, [fetchGithubProjects, fetchMediumArticles, fetchDevToArticles]);

  const name = profile?.name || DEFAULT_PROFILE.name;

  if (error) {
    return (
      <ErrorPage
        status={error.status}
        title={error.title}
        subTitle={error.subTitle}
      />
    );
  }

  return (
    <Fragment>
      <div
        className={`p-4 lg:p-10 min-h-screen ${
          loading || error ? 'flex justify-center items-center' : ''
        }`}
        style={fontStyle}
      >
        {loading ? (
          <div className="w-full">
            <div className="flex justify-center items-center">
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-1">
                  <div className="card-base">
                    {skeleton({
                      width: 'w-full',
                      height: 'h-80',
                      className: 'mx-auto',
                    })}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="card-base h-full">
                    {skeleton({
                      width: 'w-full',
                      height: 'h-full',
                      className: 'mx-auto',
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <AvatarCard
                profile={profile || DEFAULT_PROFILE}
                loading={loading}
                setAvatar={setAvatar}
                config={sanitizedConfig}
              />
              <DetailsCard
                profile={profile || DEFAULT_PROFILE}
                loading={loading}
                config={sanitizedConfig}
              />
              <SkillCard
                skills={sanitizedConfig.skills}
                loading={loading}
                colors={colors}
              />
              <ExperienceCard
                experiences={sanitizedConfig.experiences}
                loading={loading}
              />
              <EducationCard
                educations={sanitizedConfig.educations}
                loading={loading}
              />
              <PublicationCard
                publications={sanitizedConfig.publications}
                loading={loading}
              />
              <CertificationCard
                certifications={sanitizedConfig.certifications}
                loading={loading}
              />
            </div>
            <div className="col-span-1 lg:col-span-2">
              {/* External Projects */}
              {sanitizedConfig.externalProjects.length > 0 && (
                <div className="card-base">
                  <div className="text-xl font-bold">Projeler</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {sanitizedConfig.externalProjects.map((project, index) => (
                      <ExternalProjectCard
                        key={index}
                        project={project}
                        loading={loading}
                        onClick={handleProjectClick} // onClick handler'ını iletiyoruz
                      />
                    ))}
                  </div>
                </div>
              )}
              {/* Github Projects */}
              {sanitizedConfig.projects.github.mode !== 'disabled' && (
                <div className="card-base mt-6">
                  <div className="text-xl font-bold">GitHub Projeleri</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {githubProjectsLoading
                      ? SKELETON_STYLES.map((_, index) => (
                          <GithubProjectCard
                            key={index}
                            project={null}
                            loading={true}
                          />
                        ))
                      : githubProjects.map((project, index) => (
                          <GithubProjectCard
                            key={index}
                            project={project}
                            loading={false}
                            config={sanitizedConfig.projects.github}
                          />
                        ))}
                  </div>
                </div>
              )}
              {/* Blog */}
              {sanitizedConfig.blog.medium.mode !== 'disabled' && (
                <div className="card-base mt-6">
                  <div className="text-xl font-bold">Medium</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {mediumArticlesLoading
                      ? SKELETON_STYLES.map((_, index) => (
                          <BlogCard key={index} article={null} loading={true} />
                        ))
                      : mediumArticles.map((article, index) => (
                          <BlogCard
                            key={index}
                            article={article}
                            loading={false}
                          />
                        ))}
                  </div>
                </div>
              )}
              {sanitizedConfig.blog.dev.mode !== 'disabled' && (
                <div className="card-base mt-6">
                  <div className="text-xl font-bold">Dev.to</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {devToArticlesLoading
                      ? SKELETON_STYLES.map((_, index) => (
                          <BlogCard key={index} article={null} loading={true} />
                        ))
                      : devToArticles.map((article, index) => (
                          <BlogCard
                            key={index}
                            article={article}
                            loading={false}
                          />
                        ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <ThemeChanger
        theme={theme}
        setTheme={setTheme}
        loading={loading}
        themeConfig={sanitizedConfig.themeConfig}
      />
      <Footer
        loading={loading}
        name={name}
        github={sanitizedConfig.social.github}
      />
      {/* Modal'ı sayfanın sonunda render ediyoruz */}
      <Modal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        url={selectedProject?.link || ''}
        title={selectedProject?.title || ''}
      />
    </Fragment>
  );
};

export default GitProfile;
