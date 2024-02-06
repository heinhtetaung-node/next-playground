import Image from "next/image";

export async function getStaticProps(context) {
  return {
    props: {
      config: "motor-insurance",
      id: context.params.id,
    },
  };
}

export const getStaticPaths = async () => ({ paths: [], fallback: true });

export default function Transaction({ id, config }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Transaction {id}
      </div>
    </main>
  );
}
