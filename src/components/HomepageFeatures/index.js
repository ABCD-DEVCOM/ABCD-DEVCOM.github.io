import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Installation and Server',
    Svg: require('@site/static/img/main_arrow_download_32_regular.svg').default,
    link: '/docs/3.1/category/installation',
    description: (
      <>
        Installation of Apache, PHP, and configuration of Virtual Hosts and ports (9090). Understand the <code>htdocs</code> and <code>cgi-bin</code> folders.
      </>
    ),
  },
  {
    title: 'User guide',
    Svg: require('@site/static/img/main_form_new_32_regular.svg').default,
    link: '/docs/3.1/category/user-guide---modules',
    description: (
      <>
        User guide for cataloguing, circulation, OPAC acquisitions, and user administration in the web interface.
      </>
    ),
  },
  {
    title: 'Database Architecture',
    Svg: require('@site/static/img/main_database_plus_32_regular.svg').default,
    link: '/docs/3.1/category/data-models--standards', // Nova rota sugerida
    description: (
      <>
        Delve deeper into the <code>bases</code> folder. Structure of CISIS files (.mst, .xrf, .pft) and system customisation.
      </>
    ),
  },
  {
    title: 'CISIS Utilities and Format Language',
    Svg: require('@site/static/img/main_content_settings_32_regular.svg').default, // Sugestão de ícone (pode usar outro existente)
    link: '/docs/3.1/category/advanced-topics--reference-technical',
    description: (
      <>
        Advanced use of executables in the <code>cgi-bin</code> folder (mx, wxis) for data manipulation via command line and Formatting Language.
      </>
    ),
  },
];

// Ajustamos o tamanho da coluna aqui
function Feature({ Svg, title, description, link }) {
  return (
    // Mudança crucial: 'col--3' faz caberem 4 itens numa linha em telas grandes
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Link to={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}