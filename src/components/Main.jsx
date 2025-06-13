// Main.jsx
import styles from './Main.module.css';

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.cardContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <img src="BodyKit.webp" alt="Produto 1" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>Widebody Kit Chevette</h2>
          <p className={styles.cardDescription}>Widebody Kit CWD para GM Chevette SL/Júnior<br/><br/>Itens inclusos:<br/>01 parachoque dianteiro<br/>01 parachoque traseiro<br/>01 par de spoilers laterais<br/>04 fenders (alargadores de paralamas)</p>
          <h2 className={styles.cardPrice}> <br/> R$6.599,00 <br/> </h2>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <img src="SuspensãoAr.jpg" alt="Produto 2" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>Kit Suspensão A Ar Black 8mm Stage 1</h2>
          <p className={styles.cardDescription}>O KIT AIR RIDE BLACK <br/><br/>Acompanha um sistema totalmente prático e diferenciado. Onde o bloco de válvulas utiliza sistema acoplado 2 em 1, isso mesmo, além de toda sua estética moderna e diferenciada, no próprio bloco de válvulas já estará acoplado toda a inteligência do sistema junto com o Bluetooth disponível para IOS ou Android.</p>
          <h2 className={styles.cardPrice}> <br/> R$ 4.199,00 <br/> </h2>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <img src="KitTurbo.webp" alt="Produto 3" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>KIT TURBO CHEVETTE OHC</h2>
          <p className={styles.cardDescription}>Esse kit permite que o motor original 1.4 ou 1.6 do Chevette ganhe força extra, podendo dobrar ou até triplicar sua potência dependendo da preparação e dos ajustes. É muito usado por entusiastas que buscam desempenho em arrancadas e projetos de carros personalizados. É importante reforçar a necessidade de ajustes finos (acerto de carburação ou injeção) e reforço de componentes internos, como pistões e bielas, para garantir durabilidade e segurança.</p>
          <h2 className={styles.cardPrice}> <br/> R$ 5.830,05 <br/> </h2>
        </div>

        {/* Card 4 */}
        <div className={styles.card}>
          <img src="AroZunky.webp" alt="Produto 4" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>Rodas Aro 17 4x100 Ralinho</h2>
          <p className={styles.cardDescription}>Jogo De Rodas Aro 17 4x100 Ralinho Chevette Chevy Zk928 <br/><br/>ITENS INCLUSOS por unidade em sua compra: <br/>01 Jogo de Rodas (4 Unidades)<br/>4 Bicos Tr414 comuns de cortesia</p> 
          <h2 className={styles.cardPrice}> <br/> R$ 3.822,58 <br/> </h2>
        </div>
      </div>
    </main>
  );
}
