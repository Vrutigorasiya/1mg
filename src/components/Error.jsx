

const Error = () => {
    return (
      <div>
          <section className="container mt-20 ">
              <div className="w-9/12 mx-auto">
                  <div className="row border rounded shadow-2xl  flex p-10">
                      <div className="mx-auto my-auto ">
                          <h1 className="text-5xl font-extrabold  text-gray-800">uh ohhh !</h1>
                          <h2 className="text-2xl w-40 min-w-18 mt-8 font-bold">we {"can't"} find the page {"you're"} looking for {":("}</h2>
                          <button className="px-8 py-2.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">GO HOME</button>
                      </div>
                      <div className=" mx-auto my-auto xs:hidden ">
                          <img loading="lazy" src="public/imgs/404.jpg" alt="revvevf" className="w-4/5 float-end" to="/"/>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    )
  }
  
  export default Error