/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
import { Experience } from '../component/experience';
import { Introduce } from '../component/introduce';
import { OpenSource } from '../component/openSource';
import { Publication } from '../component/publication';
import { Presentation } from '../component/presentation';
import { Profile } from '../component/profile';
import { Project } from '../component/project';
import { Skill } from '../component/skill';
import { Style } from '../component/common/Style';
import Payload from '../payload';
import { Article } from '../component/article';

function Yosume() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCW0CR8M8X" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZCW0CR8M8X');
          `,
          }}
        />
        {/* Naver Analytics */}
        <script type="text/javascript" src="//wcs.naver.net/wcslog.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "7e701a42aec008";
            if(window.wcs) {
              wcs_do();
            }
          `,
          }}
        />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Skill.Component payload={Payload.skill} />
        <Experience.Component payload={Payload.experience} />
        <Project.Component payload={Payload.project} />
        <Publication.Component payload={Payload.publication} />
        <Presentation.Component payload={Payload.presentation} />
        <OpenSource.Component payload={Payload.openSource} />
        <Article.Component payload={Payload.article} />
        <Education.Component payload={Payload.education} />
        <Etc.Component payload={Payload.etc} />
      </Container>
    </>
  );
}

export default Yosume;
