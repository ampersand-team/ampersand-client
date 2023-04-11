import { GetServerSideProps } from "next";

export default function () {
  return {};
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/app",
      permanent: true,
    },
  };
};
