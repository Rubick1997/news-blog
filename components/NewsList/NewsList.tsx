import Image from "next/image";
import Link from "next/link";

function NewsList({ news }: Props) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img
              src={`/images/news/${newsItem.image}`}
              alt={`${newsItem.title} picture`}
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default NewsList;

type Props = {
  news: News[];
};
