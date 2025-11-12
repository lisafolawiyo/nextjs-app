'use client';

import React from 'react';

import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import { Post } from '@/types/post';
import { stripOuterTags } from '@/utils/util';

const Editorial = ({ post }: { post: Post }) => {
  // sanitize the rendered HTML
  const sanitizedHtml = DOMPurify.sanitize(post.content.rendered);

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <section className="single-post-section">
      <div className="section-wrapper single-post-wrapper">
        <div className="single-post-header">
          <p>{formattedDate}</p>
          <h1>{stripOuterTags(post.title.rendered)}</h1>
        </div>
        <div className="single-post-content">{parse(sanitizedHtml)}</div>
      </div>
    </section>
  );
};

export default Editorial;
