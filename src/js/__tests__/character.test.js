import { Magician, Daemon } from "../character";

test("Testing attack by Magician without stoned", () => {
    let mage = new Magician(100)

    mage.distance = 5

    expect(mage.attack).toEqual(60)

    mage.distance = 3

    expect(mage.attack).toEqual(80)
})

test("Testing attack by Daemon with stoned", () => {
    let daemon = new Daemon(150)

    daemon.distance = 5
    daemon._stoned = true

    expect(daemon.attack).toEqual(78)

    daemon.distance = 3

    expect(daemon.attack).toEqual(112)
})