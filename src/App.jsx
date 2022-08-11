import './App.css'

function App() {
  return (
    <section className="card">
      <div className="card__person"></div>
      <h2 className="card__name">Lawrent Umaña Jimenes</h2>
      <p className="card__position">Full-Stack Developer</p>
      <div className="card__tecnologies">
        <span>Tecnologies that I know:</span>
        <div className="card__tecnologies__list">
          <a href="#" className="card__icon card__icon--html"></a>
          <a href="#" className="card__icon card__icon--css"></a>
          <a href="#" className="card__icon card__icon--bootstrap"></a>
          <a href="#" className="card__icon card__icon--js"></a>
          <a href="#" className="card__icon card__icon--typescript"></a>
          <a href="#" className="card__icon card__icon--mongodb"></a>
          <a href="#" className="card__icon card__icon--express"></a>
          <a href="#" className="card__icon card__icon--react"></a>
          <a href="#" className="card__icon card__icon--node"></a>
          <a href="#" className="card__icon card__icon--git"></a>
        </div>
      </div>
      <div class="card__media">
        <a href="https://github.com/novasuperior" className="card__icon card__icon--github" target="_blank"></a>
        <a href="https://twitter.com/nova_superior_" className="card__icon card__icon--twitter"></a>
        <a href="https://www.linkedin.com/in/lawrent-uma%C3%B1a-93ab57233/" className="card__icon card__icon--linkedin"></a>
      </div>
    </section>
  )
}

export default App
