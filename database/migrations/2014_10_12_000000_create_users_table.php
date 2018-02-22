<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
  /**
  * Run the migrations.
  *
  * @return void
  */
  public function up()
  {

    Schema::create('groups', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name');
      $table->integer('l_c_id')->unsigned();
      $table->timestamps();
    });
    
    Schema::create('members', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('group_id')->unsigned();

      $table->string('email')->unique();
      $table->string('password', 60);
      $table->boolean('admin')->default(false);
      $table->boolean('judge')->default(false);
      $table->rememberToken();
      $table->timestamps();

      $table->string('first_name');
      $table->string('last_name');
      $table->string('country');
      $table->date('birthdate');
      $table->enum('sex', ['m', 'f']);

      $table->integer('years_study');
      $table->string('faculty');
      $table->string('tshirt');
      $table->string('number');

      $table->integer('l_c_id')->unsigned();

      $table->foreign('group_id')
      ->references('id')->on('groups')
      ->onDelete('cascade')
      ->onUpdate('cascade');
    });

    Schema::create('password_resets', function (Blueprint $table) {
      $table->string('email')->index();
      $table->string('token')->index();
      $table->timestamp('created_at');
    });

    Schema::create('config', function (Blueprint $table) {
      $table->increments('id');
      $table->string('admin_email');
      $table->string('registration_enabled');
      $table->dateTime('countdown');
      $table->timestamps();
    });

    Schema::create('ideas', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('group_id')->unsigned();

      $table->string('name');
      $table->string('description');
      $table->string('modules');
      $table->string('platform');
      $table->timestamps();

      $table->foreign('group_id')
      ->references('id')->on('groups')
      ->onDelete('cascade')
      ->onUpdate('cascade');
    });

    Schema::create('l_cs', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name');
      $table->integer('ambassador_id')->unsigned();
      $table->timestamps();
    });


    DB::statement('ALTER TABLE ideas MODIFY `description` MEDIUMTEXT;');
  }

  /**
  * Reverse the migrations.
  *
  * @return void
  */
  public function down()
  {
    Schema::dropIfExists('users');
    Schema::dropIfExists('password_resets');
    Schema::dropIfExists('groups');
    Schema::dropIfExists('ideas');
    Schema::dropIfExists('config');
    Schema::dropIfExists('l_cs');
  }
}
