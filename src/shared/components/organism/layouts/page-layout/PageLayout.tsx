import { TitleHeader } from "@/shared/components/molecules/title-header/TitleHeader";

/*
    FormLayout => contained only PageTitle and PageBody or children (PageBody)
*/
export const PageLayout = ({ children }: any) => {
  return <div>{children.length === 2 ? children : <Error />}</div>;
};

export const PageTitle = ({ children }: any) => {
  return <TitleHeader variant="xh1">{children}</TitleHeader>;
};

// export const PageSubtitle = ({ children }: any) => {
//   return <TitleHeader variant="xh2">{children}</TitleHeader>;
// };

export const PageBody = ({ children }: any) => {
  return <div>{children}</div>;
};

// example
/*
<PageLayout title="My Page Title">
   <p>This is the body of my page.</p>
</PageLayout>;

<PageLayout>
  <PageTitle>My Page Title</PageTitle>
  <PageBody>
    <p>This is the body of my page.</p>
  </PageBody>
</PageLayout>;
*/
