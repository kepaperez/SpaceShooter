package com.sandipbhattacharya.spaceshooter;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.sandipbhattacharya.spaceshooter.Login.DBHelper;

public class GameOver extends AppCompatActivity {

    DBHelper DB ;
    TextView tvPoints;
    String user;


    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        DB = new DBHelper(this);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.game_over);
        int points = getIntent().getExtras().getInt("points");
        tvPoints = findViewById(R.id.tvPoints);
        tvPoints.setText("" + points);
        user = "kepa";

      DB.insertPartida("kepa", String.valueOf(points));


    }

    public void restart(View view) {
        Intent intent = new Intent(GameOver.this, StartUp.class);
        startActivity(intent);
        finish();

    }


    public void exit(View view) {

        finish();
    }
}
