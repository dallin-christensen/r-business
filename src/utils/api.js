export const getBusinessPosts = async () => {
  const data = await fetch('https://www.reddit.com/r/business/.json?limit=4&count=4')
    .then(response => response.json())
    .catch(console.warn)

  return data
}

export const getBusinessBefore = async (before) => {
  const data = await fetch(`https://www.reddit.com/r/business/.json?limit=4&count=4&before=${before}`)
    .then(response => response.json())
    .catch(console.warn)

  return data
}

export const getBusinessAfter = async (after) => {
  const data = await fetch(`https://www.reddit.com/r/business/.json?limit=4&count=4&after=${after}`)
    .then(response => response.json())
    .catch(console.warn)

  return data
}