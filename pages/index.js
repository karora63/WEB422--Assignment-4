import Image from 'next/image';

const Home = () =>   {
  return (
    <div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg""
        alt="Metropolitan Museum of Art"
        width={1200}
        height={800}
        className="img-fluid rounded"
      />
      <div className="row">
        <div className="col-md-6">
          <p>
            The Metropolitan Museum of Art, colloquially The Met, is the largest art museum in the United States.
            Located in New York City, it houses a vast collection spanning 5,000 years of art from various cultures.
          </p>
        </div>
        <div className="col-md-6">
          <p>
            For more information, visit the <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">Metropolitan Museum of Art Wikipedia page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home