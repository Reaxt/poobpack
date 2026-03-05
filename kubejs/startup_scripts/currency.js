// I realized the simplest solution to getting an item with the perfect rarity for currency is to make it myself.

StartupEvents.registry('item', event => {
    event.create("diamond_coin").displayName("Diamond Coin")
    event.create("diamond_coinstack").displayName("Diamond Coin Stack")
})