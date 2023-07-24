
const Header = ({themeData}) => {
    const{primaryColor}=themeData;

  return (
    <div className='--pad header' style={{background:primaryColor}}>
    <div className="--flex-between">
        <h3>
            <span className='--fw-bold' style={{color:"white"}}>Welcome </span>
            <span className='--color-danger' style={{color:"white"}}>User</span>
        </h3>
    </div>
   
</div>
  )
}

export default Header