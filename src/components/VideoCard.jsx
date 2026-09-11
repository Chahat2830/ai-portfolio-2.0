import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article
      className="card-dark"
      style={{
        padding: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >

      {/* Video Preview */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: '#090d16',
          marginBottom: '18px'
        }}
      >

        {isPlaying ? (

          /* YouTube Player */
          <iframe
            src={`${video.embedUrl}?autoplay=1`}
            title={video.title}
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

        ) : (

          /* Thumbnail */
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${video.title}`}
            style={{
              width: '100%',
              height: '100%',
              padding: 0,
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#090d16'
            }}
          >

            <img
              src={video.thumbnail}
              alt={`${video.title} video thumbnail`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />

            {/* Dark Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'rgba(0, 0, 0, 0.25)'
              }}
            />

            {/* Play Button */}
            <div
              style={{
                position: 'absolute',
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background:
                  'rgba(59, 130, 246, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow:
                  '0 0 24px rgba(59, 130, 246, 0.5)'
              }}
            >
              <Play
                size={23}
                fill="currentColor"
                style={{
                  marginLeft: '3px'
                }}
              />
            </div>

          </button>

        )}

      </div>


      {/* Video Information */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >

        {/* Category */}
        {video.category && (
          <div
            style={{
              color: '#60a5fa',
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '7px'
            }}
          >
            {video.category}
          </div>
        )}


        {/* Title */}
        <h4
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: '1.4',
            margin: '0 0 8px 0'
          }}
        >
          {video.title}
        </h4>


        {/* Description */}
        <p
          style={{
            fontSize: '0.82rem',
            color: '#94a3b8',
            lineHeight: '1.6',
            margin: '0 0 16px 0',
            flex: 1
          }}
        >
          {video.description}
        </p>


        {/* Technologies */}
        {video.technologies?.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '7px',
              marginBottom: '18px'
            }}
          >

            {video.technologies.map(
              (technology, index) => (
                <span
                  key={index}
                  style={{
                    background:
                      'rgba(255, 255, 255, 0.05)',
                    border:
                      '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#cbd5e1',
                    fontSize: '0.68rem',
                    padding: '5px 8px',
                    borderRadius: '7px'
                  }}
                >
                  {technology}
                </span>
              )
            )}

          </div>
        )}


        {/* YouTube Link */}
        {video.link && (
          <a
            href={video.link}
            target="_blank"
            rel="noreferrer"
            className="project-action-link"
            style={{
              alignSelf: 'flex-start'
            }}
          >
            Watch on YouTube
            <ExternalLink size={14} />
          </a>
        )}

      </div>

    </article>
  );
};

export default VideoCard;