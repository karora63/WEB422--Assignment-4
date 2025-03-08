import useSWR from 'swr';
import Link from 'next/link';
import Error from 'next/error';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ArtworkCardDetail({objectID}) {
    const {data,error} = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);

    if (!data && !error) {
        return null;
    }
    
    if(error){
        return <Error statusCode={404} />
    }

  return (
    <>
    <Card style={{ width: '18rem' }}>
      {data.primaryImageSmall && <Card.Img variant="top" src= {data.primaryImageSmall} />}
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.text}
        </Card.Text>
        <Card.Text>
        Medium: {data.medium || 'N/A'}
        </Card.Text>
        <br></br>
        <br />
        <Card.Text>
        Artist :{data.artistDisplayName}
        </Card.Text>
        <Card.Text> {data.artistDisplayName && data.artistWikiData_URL && <a href={data.artistWikiData_URL} target="_blank" rel="noreferrer">[Wiki]</a>}
        </Card.Text>
        <Card.Text>
        Credit Line: {data.creditLine || 'N/A'}
        </Card.Text>
        <Card.Text>
        Dimensions: {data.dimensions || 'N/A'}
        </Card.Text>
        <Link href={`/artwork/${objectID}`} passHref>
            <Button variant="primary">{objectID}</Button>
        </Link>
      </Card.Body>
    </Card>    
    </>
  )
}

