import './News.css'

export default function News(props) {
  return (
    <div className='news'>
      <p>
        <strong>{props.date}</strong>
      </p>
      <p>{props.info}</p>
    </div>
  );
}
