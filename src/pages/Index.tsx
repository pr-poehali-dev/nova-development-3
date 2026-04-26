const tracks = [
  "1. моя девушка не выдержала меня",
  "2. кто мне звонит",
  "3. стук в дверь",
  "4. помоги",
  "5. сломал пальцы",
  "6. домой feat shawtyway",
  "7. не волнуйся",
  "8. диафрагма",
  "9. эксперимент feat nosebleed44",
  "10. ругань за стеной",
  "11. сегодняшний день",
  "12. нам пора feat bllck, par1ah",
  "13. твои проблемы решены",
  "14. я не боюсь feat bllck, par1ah",
  "15. нету ничего feat демасимка",
  "16. пепел feat стасик гаузов, maryy",
  "17. морг feat lqmiexd, umeru, Reze",
  "18. ведь завтра",
]

export default function Index() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 py-24">
      <div className="text-center">
        <ol className="space-y-3">
          {tracks.map((track, i) => (
            <li
              key={i}
              className="font-serif text-lg md:text-2xl text-white/80 hover:text-white transition-colors duration-300"
            >
              {track}
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}
