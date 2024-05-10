import { NewsList } from "@/components";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

function FilteredNewsPage({ params }: Props) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news: News[] = [];
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(parseInt(selectedYear));
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(
      parseInt(selectedYear),
      parseInt(selectedMonth)
    );
    links = [];
  }

  let newsContent = <p>No news found for the selected period</p>;

  if (news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear &&
      !getAvailableNewsYears().includes(parseInt(selectedYear))) ||
    (selectedMonth &&
      !getAvailableNewsMonths(parseInt(selectedYear)).includes(
        parseInt(selectedMonth)
      ))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
export default FilteredNewsPage;

type Props = {
  params: { filter: string[] };
};
