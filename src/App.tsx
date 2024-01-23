import ToDoItem from "./components/ToDoItem"

function ToDoList({ children }: { children: React.ReactNode}) {
   return (
      <div className='bg-slate-700 w-5/6 max-h-full rounded-md flex items-center p-4 flex-col overflow-y-scroll space-y-2 max-w-3xl'>
         {children}
      </div>
   )
}

function App() {
   return (
      <>
         <h1 className="text-4xl mb-4 text-center">To Do's</h1>

         <ToDoList>
            <ToDoItem title="test title" content="content"></ToDoItem>
            <ToDoItem title="test title" content="content"></ToDoItem>
            <ToDoItem title="test title" content="conteasdsa sadasd asdas dasdsadas dasd asdas dasdas dasd dsa dnt"></ToDoItem>
            <ToDoItem title="test title" content="conteasdsa sadasd asdas dasdsadas dasd asdas dasdas dasd dsa dnt"></ToDoItem>
            <ToDoItem title="test title" content="conteasdsa sadasd asdas dasdsadas dasd asdas dasdas dasd dsa dnt"></ToDoItem>
            <ToDoItem title="test title" content="conteasdsa sadasd asdas dasdsadas dasd asdas dasdas dasd dsa dnt"></ToDoItem>
            <ToDoItem title="test title" content="content"></ToDoItem>
            <ToDoItem title="test title" content="content"></ToDoItem>
            <ToDoItem title="test title" content="content"></ToDoItem>
            <ToDoItem title="test title" content="content"></ToDoItem>
         </ToDoList>
      </>
   )
}

export default App
