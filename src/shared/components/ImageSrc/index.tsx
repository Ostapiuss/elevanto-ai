import './style.scss';

type Props = {
  src: string;
  alt: string;
};

export default function ImageSrc({ src, alt }: Props) {
  return <img src={src} alt={alt} />;
}
