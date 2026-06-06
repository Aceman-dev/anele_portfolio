import styles from "../../styles/home.module.css";

export default function RepoCard({ r }) {
  return (
    <a href={r.html_url} target="_blank" rel="noreferrer" className={styles.repoCard}>
      <div className={styles.repoCardTop}>
        <h3 className={styles.repoName}>{r.name}</h3>
        <span className={styles.repoArrow}>/&gt;</span>
      </div>
      <p className={styles.repoDesc}>{r.description || "No description."}</p>
      <div className={styles.repoMeta}>
        {r.language && (
          <span className={styles.repoLang}>
            <span className={styles.repoLangDot} />
            {r.language}
          </span>
        )}
        <span>★ {r.stargazers_count}</span>
        <span>⑂ {r.forks_count}</span>
      </div>
    </a>
  );
}