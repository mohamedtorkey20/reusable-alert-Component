import './App.css'
 import Alert from './Components/Ui/Alert';
 import { BellRing,Ban, Info ,CheckCheck,CircleDot} from 'lucide-react';

function App() {

  return (
    <>
      <Alert 
      type={'alert-default'} 
      icon={<BellRing size={20}/>}
      title='Upgrade your plan'>
        
        <p>
        Lorem ipsum dolor sit amet consectetur  adipisicing elit. Blanditiis voluptas, quidem obcaecati, architecto 
      labore incidunt quia sunt odit aspernatur{" "}
      <a href="/"> presaenation</a>
        </p>
        
        </Alert>



         <Alert 
         type={'alert-info'} 
         icon={<Info size={20}/>}
         title='Note'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas, quidem obcaecati, architecto 
        labore incidunt quia sunt odit aspernatur'/>

      <Alert
       type={'alert-warning'} 
       icon={<CheckCheck size={20}/>} 
       title='Your order has been processed'>
        <p>
          Lorem ipsum dolor sit amet consectetur  adipisicing elit. Blanditiis voluptas, quidem obcaecati, architecto 
          labore incidunt quia sunt odit aspernatur
          </p>
        
        </Alert>
     
     <Alert
      type={'alert-error'} 
      icon={<Ban size={20}/>} 
      title='Something went wrong' 
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas, quidem obcaecati, architecto 
              labore incidunt quia sunt odit aspernatur'
      />
     
     <Alert
      type={'alert-success'} 
      icon={<CircleDot size={20}/>}
      title='Tips & Tricks' 
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas, quidem obcaecati, architecto 
              labore incidunt quia sunt odit aspernatur'
      />
     
    </>
  )
}

export default App
