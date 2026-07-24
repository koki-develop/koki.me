import styles from "./SourceComment.module.css";

type SourceCommentProps = {
  children: string;
};

export function SourceComment({ children }: SourceCommentProps) {
  return <div className={styles.comment}>{`// ${children}`}</div>;
}
