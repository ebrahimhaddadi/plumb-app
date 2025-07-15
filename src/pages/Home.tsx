import { useTranslation } from "react-i18next"
import Card from "../components/card/Card.tsx";


const Home = () => {
  const { t } = useTranslation()
  return(
      <>
        <h1 className="text-2xl font-bold">{t("home")}</h1>
        <p className="mt-2">{t("welcome")}</p>
          <div className="overflow-x-auto">
              <div className="flex gap-4 w-max">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
          </div>
      </>
  )
}
export default Home;