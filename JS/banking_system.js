// Implementasikan kelas BankAccount dengan metode deposit() dan withdraw()
// Gunakan setTimeout() untuk mensimulasikan operasi transaksi yang asynchronous.
// deposit(amount): Metode ini akan menerima jumlah uang yang akan disimpan ke dalam akun.
// withdraw(amount): Metode ini akan menerima jumlah uang yang akan ditarik dari akun, asalkan saldo mencukupi.
// Gunakan fungsi setTimeout() untuk mensimulasikan operasi transaksi yang asynchronous.


// Class BankAccount
class BankAccount {
    constructor(balance) {
        this.balance = balance || 0;
    }

    // deposit(amount): Metode ini akan menerima jumlah uang yang akan disimpan ke dalam akun.
    deposit(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (parseInt(amount) > 0) {
                    this.balance += parseInt(amount);
                    resolve(`Deposit sebesar Rp. ${amount} berhasil. Saldo sekarang Rp. ${this.balance}`);
                } else {
                    reject('Jumlah deposit harus lebih dari 0.');
                }
            }, 1000);
        });
    }

    // withdraw(amount): Metode ini akan menerima jumlah uang yang akan ditarik dari akun, asalkan saldo mencukupi.
    withdraw(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (parseInt(amount) <= this.balance) {
                    this.balance -= parseInt(amount);
                    resolve(`Penarikan sebesar Rp. ${amount} berhasil. Saldo sekarang Rp. ${this.balance}`);
                } else {
                    reject('Saldo tidak mencukupi untuk penarikan tersebut.');
                }
            }, 1000);
        });
    }
}

const myAccount = new BankAccount(0);

(async () => {
    let repeat = true;

    while (repeat) {
        let menu = prompt(`Selamat Datang di ATM Binar

        Pilih Menu Transaksi
        1. Deposit.
        2. Withdraw.
        3. Keluar.`);

        switch (Number(menu)) {
            case 1:
                let depositAmount = prompt(`
                =============
                Deposit.
                =============

                Masukkan Nominal :`);
                try {
                    const depositResult = await myAccount.deposit(depositAmount);
                    alert(depositResult);
                } catch (error) {
                    alert(error);
                }
                break;

            case 2:
                let withdrawAmount = prompt(`
                ==============
                Withdraw.
                ==============

                Masukkan Nominal :`);
                try {
                    const withdrawResult = await myAccount.withdraw(withdrawAmount);
                    alert(withdrawResult);
                } catch (error) {
                    alert(error);
                }
                break;

            case 3:
                repeat = false;
                break;

            default:
                alert('Menu Lain Belum Tersedia !!!');
        }
    }
})();



