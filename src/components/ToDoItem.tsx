function ToDoItem({ title, content }: { title: string, content: string }) {
   return (
      <div className='bg-slate-500 w-full rounded-md flex justify-center p-4 flex-col'>
         <h1 className="capitalize text-xl">{title}</h1>
         <p className="capitalize">{content}</p>
      </div>
   );
}

export default ToDoItem;