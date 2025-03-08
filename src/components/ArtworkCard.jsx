import useSWR from 'swr';
import Link from 'next/link';
import Error from 'next/error';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ArtworkCard({objectID}) {
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
      <Card.Img variant="top" src= {data.primaryImageSmall || "https://via.placeholder.com/375x375.png?text=%5b+Not+Available+%5d" }/>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.text}
        </Card.Text>
        <Link href={`/artwork/${objectID}`} passHref>
            <Button variant="primary">{objectID}</Button>
        </Link>
      </Card.Body>
    </Card>    
    </>
  )
}

