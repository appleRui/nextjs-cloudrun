const AwesomeLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <h1>Awesome Layout</h1>
      {children}
    </div>
  );
}

export default AwesomeLayout;