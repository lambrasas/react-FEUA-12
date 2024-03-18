import PropTypes from 'prop-types'
const Greeting =({name})=>{

    if(!name){
        return <div>Hello Guest, please login first.</div>
    }

   return <div>Hello {name}, how are you today?</div> 
}

Greeting.propTypes={
    name:PropTypes.string
}
export default Greeting