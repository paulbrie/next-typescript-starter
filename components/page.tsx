import Head from 'next/head'
export default function Page({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <>
      <Head>
        <title>{title || 'A default page title'}</title>
      </Head>
      {children}
    </>
  )
}
