//import { Container, Card, Col, Row, Button, Text, Grid } from '@nextui-org/react';
import { signIn } from 'next-auth/react';

export default function Info() {
  return (
    //used next-ui but later switched to tailwind
    // <main> 
    //   <div>
    //    <p>IITJ OMEGLE</p>
    //    <button onClick={() => signIn('google')}>sign in with google</button>
    //  </div>
    // <Grid.Container justify='center' css={{margin: 0}}>
    // <Card css={{ mw: "400px" }}>
    //   <Card.Body>
    //   <Card.Header>
    //         <Text b>IITJ Omegle</Text>
    //       </Card.Header>
    //       <Card.Divider />
    //       <Card.Body css={{ py: "$10" }}>
    //         <Text>
    //         Omegle is a great way to meet new friends, IITJ omegle is a great way to make connections inside IITJ .
    //         When you use IITJ Omegle, you are paired randomly with another person to talk one-on-one. 
    //         Hope you have fun!
    //         </Text>
    //       </Card.Body>
    //       <Card.Divider />
    //       <Card.Footer>
    //         <Row justify="flex-end">
    //           <Button size="sm" light onClick={}>
    //             next
    //           </Button>
    //           <Button size="sm">Agree</Button>
    //         </Row>
    //       </Card.Footer>
    //   </Card.Body>
    // </Card>
    // </Grid.Container>
    // </main>
    <main className="w-screen h-screen bg-[#212b42] flex flex-col">
    <section className='text-[#add7ff] flex justify-between px-10 py-5 text-2xl'>
      <h1>IITJ Omegle</h1>
        <button onClick={() => signIn('google')}>sign in</button>
      </section>  
      <div className='flex justify-center'>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#82a3c3]">ABOUT US</h5>
       <p className="mb-3 font-normal text-[#82a3c3]"> Omegle is a great way to meet new friends, IITJ omegle is a great 
            way to make connections inside IITJ .
            When you use IITJ Omegle, you are paired randomly with another person from IITJ to talk one-on-one. 
            Hope you have fun!.</p>
            <h5 className="mb-3 font-normal text-[#82a3c3]">Sign in with your IITJ account:</h5>
        <div className="basis-1/2 mx-3 block mb-2 text-[#b3cfeb] bg-[#365fbc] px-5 py-3 rounded-xl">
          <button onClick={() => signIn('google')}>Sign In with your IITJ Google Account.</button>
        </div>
      </div>
      </div>
      </main>
  );
}