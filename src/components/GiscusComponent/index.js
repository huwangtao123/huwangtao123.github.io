import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

import styles from './styles.module.css';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo='huwangtao123/huwangtao123.github.io'
      repoId='MDEwOlJlcG9zaXRvcnkxODUwMDA2NQ=='
      category='General'
      categoryId='DIC_kwDOARpJ4c4CSQPb'
      mapping='url'
      term='Welcome to @giscus/react component!'
      strict='0'
      reactionsEnabled='1'
      emitMetadata='1'
      inputPosition='top'
      theme={colorMode}
      lang='en'
      loading='lazy'
      crossorigin='anonymous'
      async
    />
  );
}
