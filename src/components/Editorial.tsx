'use client';
import { Post } from '@/types/post';
import { stripOuterTags } from '@/utils/util';
import React from 'react';
import DOMPurify from "isomorphic-dompurify";

const Editorial = ({
  post,
}: {
  post: Post;
}) => {

    const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

  return (
    <div>
        <section className="single-post-section">
            <div className="section-wrapper single-post-wrapper">
                <div className="single-post-header">
                    <p>{formattedDate}</p>
                    <h1>
                        {stripOuterTags(post.title.rendered)}
                    </h1>
                </div>
                <div 
                className="single-post-content"
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      post.content.rendered
                    ),
                  }}>
                </div>

            </div>
        </section>
    </div>
  );
};

export default Editorial;
