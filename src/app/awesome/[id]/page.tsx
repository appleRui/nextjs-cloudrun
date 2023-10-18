const AwesomeDetailPage = ({ params: { id } }: { params: { id: string } }) => {

  return (
    <div>
      <h1>AwesomeDetailPage</h1>
      <pre>{JSON.stringify(id, null, 2)}</pre>
    </div>
  );
}

export default AwesomeDetailPage;