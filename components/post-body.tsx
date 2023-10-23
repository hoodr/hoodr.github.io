import React, { useEffect } from "react";
import { useRemark } from "react-remark";
import { Page, PageContent } from "grommet";

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    setMarkdownSource(content);
  }, [content, setMarkdownSource]);

  return (
    <Page kind="narrow">
      <PageContent>
        {reactContent}
      </PageContent>
    </Page>
  );
};

export default PostBody;
