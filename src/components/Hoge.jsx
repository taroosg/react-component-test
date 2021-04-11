export const Hoge = ({ id, handleChange, num }) => {
  const newHoge = { key02: { hoge: `hoge${num}`, fuga: `fuga${num}`, id: `key0${num}`, } }

  return (
    <button
      onClick={(e) => handleChange(e)}
      value={JSON.stringify(newHoge)}
    >hogehoge</button>
  )
}