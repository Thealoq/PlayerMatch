export default function Agents() {
    const [Content, SetArray] = useState([]);
    function Fetch() {
      fetch("https://valorant-api.com/v1/agents")
          .then(response => response.json())
          .then(json => {
              SetArray(json.data.filter(item => item.background))
          });
  }
  useEffect(() => {
      Fetch()
  }, []);
    return(
        <div>
            qwe
        </div>
    )
}