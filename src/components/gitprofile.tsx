import { Fragment, useCallback, useEffect, useState } from 'react';
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
import Modal from './modal';
import { DEFAULT_PROFILE } from '../constants';
import { Config } from '../../gitprofile.config';

type Props = {
  config: Config;
};

const GitProfile = ({ config }: Props) => {
  const [sanitizedConfig] = useState<SanitizedConfig>(
    getSanitizedConfig(config),
  );
  const [theme, setTheme] = useState<string>(() =>
    getInitialTheme(sanitizedConfig.themeConfig),
  );
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [githubProjects, setGithubProjects] = useState<any[]>([]);
  const [githubProjectsLoading, setGithubProjectsLoading] =
    useState<boolean>(false);
  const [articles, setArticles] = useState<any[]>([]);
  const [articlesLoading, setArticlesLoading] = useState<boolean>(false);

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

  const fetchProfile = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${sanitizedConfig.github.username}`,
      );
      const json = await res.json();

      if (res.status !== 200) {
        setError({
          status: res.status,
          title: 'Error',
          subTitle: 'Could not fetch profile.',
        });
        return;
      }

      setProfile(json);
    } catch (err) {
      setError({
        status: 500,
        title: 'Error',
        subTitle: 'Could not fetch profile.',
      });
    } finally {
      setLoading(false);
    }
  }, [sanitizedConfig.github.username]);

  const fetchGithubProjects = useCallback(async () => {
    if (sanitizedConfig.projects.github.mode !== 'automatic') {
      return;
    }

    setGithubProjectsLoading(true);

    try {
      const res = await fetch(
        `https://api.github.com/users/${sanitizedConfig.github.username}/repos?sort=${sanitizedConfig.projects.github.automatic.sortBy}&direction=desc&per_page=${sanitizedConfig.projects.github.automatic.limit}`,
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
    sanitizedConfig.github.username,
    sanitizedConfig.projects.github.automatic.sortBy,
    sanitizedConfig.projects.github.automatic.limit,
    sanitizedConfig.projects.github.mode,
  ]);

  const fetchArticles = useCallback(async () => {
    if (sanitizedConfig.blog.source === '' || !sanitizedConfig.blog.username) {
      return;
    }

    setArticlesLoading(true);

    try {
      let res;
      if (sanitizedConfig.blog.source === 'medium') {
        res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${sanitizedConfig.blog.username}`,
        );
      } else if (sanitizedConfig.blog.source === 'dev') {
        res = await fetch(
          `https://dev.to/api/articles?username=${sanitizedConfig.blog.username}`,
        );
      } else {
        return;
      }

      const json = await res.json();

      if (res.status !== 200) {
        return;
      }

      if (sanitizedConfig.blog.source === 'medium') {
        setArticles(json.items.slice(0, sanitizedConfig.blog.limit));
      } else if (sanitizedConfig.blog.source === 'dev') {
        setArticles(json.slice(0, sanitizedConfig.blog.limit));
      }
    } catch (error) {
      //
    } finally {
      setArticlesLoading(false);
    }
  }, [
    sanitizedConfig.blog.source,
    sanitizedConfig.blog.username,
    sanitizedConfig.blog.limit,
  ]);

  useEffect(() => {
    fetchProfile();
    fetchGithubProjects();
    fetchArticles();
  }, [fetchProfile, fetchGithubProjects, fetchArticles]);

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
      >
        {loading ? (
          <div className="w-full">
            <div className="flex justify-center items-center">
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-1">
                  <div className="card-base">
                    {skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-80',
                      className: 'mx-auto',
                    })}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="card-base h-full">
                    {skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-full',
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
                avatarRing={sanitizedConfig.themeConfig.avatarRing}
              />
              <DetailsCard
                profile={profile || DEFAULT_PROFILE}
                loading={loading}
                github={sanitizedConfig.github.username}
                social={sanitizedConfig.social}
              />
              <SkillCard skills={sanitizedConfig.skills} loading={loading} />
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
              {sanitizedConfig.projects.external.display && (
                <div className="card-base">
                  <div className="text-xl font-bold">
                    {sanitizedConfig.projects.external.header}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {sanitizedConfig.projects.external.projects.map(
                      (project, index) => (
                        <ExternalProjectCard
                          key={index}
                          project={project}
                          loading={loading}
                          onClick={handleProjectClick}
                        />
                      ),
                    )}
                  </div>
                </div>
              )}
              {/* Github Projects */}
              {sanitizedConfig.projects.github.display && (
                <div className="card-base mt-6">
                  <div className="text-xl font-bold">
                    {sanitizedConfig.projects.github.header}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {githubProjectsLoading
                      ? [
                          ...Array(
                            sanitizedConfig.projects.github.automatic.limit,
                          ).keys(),
                        ].map((_, index) => (
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
              {sanitizedConfig.blog.display && (
                <div className="card-base mt-6">
                  <div className="text-xl font-bold">Blog</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {articlesLoading
                      ? [...Array(sanitizedConfig.blog.limit).keys()].map(
                          (_, index) => (
                            <BlogCard
                              key={index}
                              article={null}
                              loading={true}
                            />
                          ),
                        )
                      : articles.map((article, index) => (
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
      <Footer loading={loading} content={sanitizedConfig.footer} />
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
