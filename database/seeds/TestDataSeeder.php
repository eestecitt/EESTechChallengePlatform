<?php

use Illuminate\Database\Seeder;

class TestDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // wipe previous data
        DB::table('groups')->delete();
        DB::table('members')->delete();
        DB::table('ideas')->delete();
        DB::table('config')->delete();
        DB::table('l_cs')->delete();

        // insert test data
        DB::table('groups')->insert(
            array(
                [ 'id' => 1, 'name' => 'OC' ],
                [ 'id' => 2, 'name' => 'Ambassadors' ],
                [ 'id' => 3, 'name' => 'Webmasters' ]
            )
        );

        DB::table('members')->insert(
            array(
                [ 'id' => 1, 'sex' => 'm', 'first_name' => 'Webmaster', 'last_name' => 'IT Team', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'admin@eestechchallenge.eestec.net', 'password' => bcrypt('ohanianah1'), 'admin' => true, 'group_id' => 3 ],
                [ 'id' => 2, 'sex' => 'f', 'first_name' => 'Challenge', 'last_name' => 'OC', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'oc@eestechchallenge.eestec.net', 'password' => bcrypt('eestechChallengeTeamRocks'), 'admin' => true, 'group_id' => 1 ]
            )
        );

        // Ambassadors
        DB::table('members')->insert(
            array(
                [ 'id' => 3, 'sex' => 'm', 'first_name' => 'Jorge', 'last_name' => 'Fernández Martínez', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'almeria@eestec.net', 'password' => bcrypt('almeriaRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 4, 'sex' => 'f', 'first_name' => 'Tunca', 'last_name' => 'Deniz Yazıcı', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'ankara@eestec.net', 'password' => bcrypt('ankaraRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 5, 'sex' => 'f', 'first_name' => 'Elena', 'last_name' => 'Xanthi', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'athens@eestec.net', 'password' => bcrypt('athensRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 6, 'sex' => 'f', 'first_name' => 'Marina', 'last_name' => 'Obrenović', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'belgrade@eestec.net', 'password' => bcrypt('belgradeRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 7, 'sex' => 'm', 'first_name' => 'Marco', 'last_name' => 'Di Giovanni', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'catania@eestec.net', 'password' => bcrypt('cataniaRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 8, 'sex' => 'm', 'first_name' => 'Daniele', 'last_name' => 'De Francesco', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'cosenza@eestec.net', 'password' => bcrypt('cosenzaRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 9, 'sex' => 'm', 'first_name' => 'Paweł', 'last_name' => 'Rybicki', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'gliwice@eestec.net', 'password' => bcrypt('gliwiceRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 10, 'sex' => 'm', 'first_name' => 'Bartek', 'last_name' => 'Kłusek', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'krakow@eestec.net', 'password' => bcrypt('krakowRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 11, 'sex' => 'm', 'first_name' => 'Gabriel', 'last_name' => 'Waterlot', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'lille@eestec.net', 'password' => bcrypt('lilleRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 12, 'sex' => 'm', 'first_name' => 'Nikola', 'last_name' => 'Stajić', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'novisad@eestec.net', 'password' => bcrypt('novisadRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 13, 'sex' => 'm', 'first_name' => 'Nikos', 'last_name' => 'Nikolaidis', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'patras@eestec.net', 'password' => bcrypt('patrasRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 14, 'sex' => 'f', 'first_name' => 'Ajša', 'last_name' => 'Terko', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'sarajevo@eestec.net', 'password' => bcrypt('sarajevoRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 15, 'sex' => 'f', 'first_name' => 'Gerta', 'last_name' => 'Xhepi', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'tirana@eestec.net', 'password' => bcrypt('tiranaRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 16, 'sex' => 'm', 'first_name' => 'Elvis', 'last_name' => 'Skoždopolj', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'tuzla@eestec.net', 'password' => bcrypt('tuzlaRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 17, 'sex' => 'f', 'first_name' => 'Katarina', 'last_name' => 'Lukić', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'zagreb@eestec.net', 'password' => bcrypt('zagrebRocks'), 'admin' => false, 'group_id' => 2 ],
                [ 'id' => 18, 'sex' => 'f', 'first_name' => 'Sandro', 'last_name' => 'Baumgartner', 'birthdate' => date('Y-m-d H:i:s', rand(315532800, 788918400)), 'created_at' => new DateTime, 'email' => 'zurich@eestec.net', 'password' => bcrypt('zurichRocks'), 'admin' => false, 'group_id' => 2 ],
            )
        );

        // Config
        DB::table('config')->insert([
            'registration_enabled' => true
        ]);
    }
}
