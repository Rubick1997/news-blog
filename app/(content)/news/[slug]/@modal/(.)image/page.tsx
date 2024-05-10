"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

function InterceptedImagePage({ params }: Props) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  const navigate = useRouter();

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={navigate.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={`${newsItem.title} image`}
          />
        </div>
      </dialog>
    </>
  );
}
export default InterceptedImagePage;

type Props = {
  params: { slug: string };
};
