import { GetServerSideProps } from "next";

export default function () {
  return {};
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};
