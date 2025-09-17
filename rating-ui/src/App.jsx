import Rating from "./components/Rating" //capitalizing our compo

const App = () => {
  const name = 'Brad';
  return(
    <div>
      <Rating heading='How do you feel about React'
        feedbackMessages={[
          'Hate it',
          'Dislike it',
          'Meh',
          'Like it',
          'Amazing'
      ]}
      />
    </div>
  );
}
 
export default App;