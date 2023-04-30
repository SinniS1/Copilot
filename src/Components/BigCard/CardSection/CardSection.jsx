import React from 'react'
import Card from './Card'
import './CardSection.scss'
const CardSection = () => {
  return (
    <div className="CardSection">
      <Card
        cardName={`Visual Studio`}
        cardLink={`https://marketplace.visualstudio.com/items?itemName=GitHub.copilotvs`}
        cardImage={`https://github.githubassets.com/images/modules/site/copilot/logos/vs-2022.svg`}
        CardNum={'Card1'}
      />
      <Card
        cardName={`Neovim`}
        cardImage={`https://github.githubassets.com/images/modules/site/copilot/logos/neovim.svg`}
        cardLink={`https://docs.github.com/en/copilot/getting-started-with-github-copilot?platform=linux`}
        CardNum={'Card2'}
      />
      <Card
        cardName={`VS code`}
        cardLink={`https://marketplace.visualstudio.com/items?itemName=GitHub.copilot`}
        cardImage={`https://github.githubassets.com/images/modules/site/copilot/logos/vscode.svg`}
        CardNum={'Card3'}
      />
      <Card
        cardName={`JetBrains`}
        cardImage={`https://github.githubassets.com/images/modules/site/copilot/logos/jetbrains.svg`}
        cardLink={`https://plugins.jetbrains.com/plugin/17718-github-copilot`}
        CardNum={'Card4'}
      />
    </div>
  )
}

export default CardSection
