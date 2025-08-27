import React from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
};

const Modal = ({ isOpen, onClose, url, title }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    // Arka planı karartan ve tıklanınca modal'ı kapatan overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      {/* Modal içeriği, tıklamaların overlay'e yayılmasını engeller */}
      <div
        className="card-base w-full h-full max-w-6xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal başlığı ve kapatma butonu */}
        <div
          className="flex justify-between items-center p-4 border-b"
          style={{
            borderColor: 'var(--primary-color)',
          }}
        >
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="btn btn-primary"
          >
            Ana Sayfaya Dön
          </button>
        </div>
        {/* Projeyi gösteren iframe */}
        <iframe
          src={url}
          className="w-full h-full border-0"
          title={title}
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
