export default function Experience() {
    return (
        <section className="bg-white dark:bg-gray-900">
          	<div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            	<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
						Experience
					</h2>

					<p className="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
						laborum labore provident impedit esse recusandae facere libero harum
						sequi.
              		</p>
            	</div>

            	<div className="mt-8 sm:mt-12">
              		<dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                		<div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                  			<dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">Working on IT</dt>
                  			<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">5 Years</dd>
                		</div>

                		<div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                  			<dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">JavaScript</dt>
                  			<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">2 Years</dd>
                		</div>

                		<div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                  			<dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">A/B Tests created</dt>
                  			<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">112</dd>
                		</div>
              		</dl>
            	</div>
          	</div>
        </section>
    )
}