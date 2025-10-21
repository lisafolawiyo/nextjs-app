'use client';
import { Post } from '@/types/post';
import { stripOuterTags } from '@/utils/util';
import React from 'react';

const EditorialList = ({ posts }: { posts: Post[] }) => {
  const mostRecentPost = posts[0];
  const otherPosts = posts.slice(1); // exclude the first one
  const featuredImage1 =
    mostRecentPost._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  const formattedMostRecentDate = new Date(
    mostRecentPost.date,
  ).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const otherPostsWithFormattedDates = otherPosts.map((post) => ({
    ...post,
    formattedDate: new Date(post.date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
  }));

  return (
    <>
      <section className="editorial-latest-section">
        <div className="section-wrapper editorial-latest-wrapper">
          <a
            href="#"
            className="latest-left"
            style={{
              backgroundImage: `url('${featuredImage1 || '/post.png'}')`,
            }}
          />
          <div className="latest-right">
            <p className="editorial-date">{formattedMostRecentDate}</p>
            <h1>{stripOuterTags(mostRecentPost.title.rendered)}</h1>
            <p className="editorial-desc">
              {stripOuterTags(mostRecentPost.excerpt.rendered)}
            </p>
            <a
              href={`/post/${mostRecentPost.slug}`}
              className="read-btn latest-read-btn"
            >
              <span>Read Editorial</span>
            </a>
          </div>
        </div>
      </section>

      <section className="editorial-list">
        <div className="section-wrapper editorial-list-wrapper">
          <div className="editorial-list-inner-wrap">
            {otherPostsWithFormattedDates.map((post) => {
              const featuredImage =
                post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              return (
                <a
                  key={post.id}
                  href={`/post/${post.slug}`}
                  className="editorial-item"
                >
                  <div className="editorial-detail-wrap">
                    <p>{post.formattedDate}</p>
                    <h3>{post.title.rendered}</h3>
                  </div>
                  <div
                    className="editorial-thumbnail"
                    style={{
                      backgroundImage: `url('${featuredImage || '/post.png'}')`,
                    }}
                  ></div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default EditorialList;
