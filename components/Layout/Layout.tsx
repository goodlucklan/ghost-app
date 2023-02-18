import { FC, ReactNode } from 'react';
import Head from 'next/head';

import { NavBar } from '../UI';

interface Props {
  title?: string;
  children: ReactNode;
}


export const Layout: FC<Props> = ({ children, title }) => {


  return (
      <html lang='en'>
        <Head>
            <title>{ title || 'PokemonApp' }</title>

        </Head>
      
        <NavBar />

        <main>
            { children }
        </main>
      
      </html>
  )
};
