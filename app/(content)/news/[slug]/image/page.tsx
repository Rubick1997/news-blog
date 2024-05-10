import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

function ImagePage({ params }: Props) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img
        src={`/images/news/${newsItem.image}`}
        alt={`${newsItem.title} image`}
      />
    </div>
  );
}
export default ImagePage;

type Props = {
  params: { slug: string };
};
