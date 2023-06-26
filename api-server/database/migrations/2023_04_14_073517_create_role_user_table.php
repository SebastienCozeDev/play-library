<?php

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('role_user', function (Blueprint $table) {
            $table->primary(['user_id', 'role_id']);
            $table->foreignIdFor(User::class)
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreignIdFor(Role::class)
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('role_user');
    }
};
