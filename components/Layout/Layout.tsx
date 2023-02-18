import { FC } from 'react';
import Head from 'next/head';

import { NavBar } from '../UI';

interface Props {
  title?: string;
  children: any;
}


export const Layout: FC<Props> = ({ children, title }) => {


  return (
      <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>

        </Head>
      
        <NavBar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
      
      </>
  )
};
